# Try using TheBloke/wizardLM-7B-HF, still cannot load memory not enough to shard ? should be sharded : 0001 of xxx.bin, decapoda is 405MB chunks, now working in kaggle also because 30GB memory is not available if using GPU
https://www.reddit.com/r/LocalLLaMA/comments/13v6qvh/til_sharding_a_model_into_smaller_chunks_may_make/
- need to be sharded first, if it will be crashed when loading into memory
!git clone https://github.com/oobabooga/text-generation-webui
%cd text-generation-webui
!pip install -r requirements.txt

!pip install -U transformers
!pip install sentencepiece bitsandbytes accelerate
---
model_id = "TheBloke/wizardLM-7B-HF"
dest = "./dest/{}".format(model.replace("/","_")) #May need to edit based on where you're storing your models
shard_size = "1000MB"

from transformers import LlamaTokenizer , LlamaForCausalLM

tokenizer = LlamaTokenizer.from_pretrained(model_id)

model = LlamaForCausalLM.from_pretrained(model_id, load_in_8bit=True, device_map='auto')

model.save_pretrained(dest, max_shard_size=shard_size)
tokenizer.save_pretrained(dest)
---

# Train until 0.xx, then stop the training ?

# Colab remove dir not empty
import shutil
shutil.rmtree('/content/testqlora/outputs')

# Prepare
!pip install -r requirements.txt -q -U

# testqlora
using qlora with test data

# push to repo
git add --all
git commit -m "commit1"
git push

# Fix for decapoda
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig,LlamaTokenizer

model_id = "decapoda-research/llama-7b-hf"
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

tokenizer = LlamaTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, quantization_config=bnb_config, device_map={"":0})

# fix for from peft...
from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=8, 
    lora_alpha=32, 
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05, 
    bias="none", 
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, config)
print_trainable_parameters(model)

# git clone
!git clone https://github.com/x4080/testqlora.git

# colab change dir
import os
os.chdir('/content/testqlora')
!ls

# Modify training pad token
import transformers

tokenizer.add_special_tokens({'pad_token': '[PAD]'})

trainer = transformers.Trainer(
    model=model,
    train_dataset=data["train"],
    args=transformers.TrainingArguments(
        per_device_train_batch_size=1,
        gradient_accumulation_steps=4,
        warmup_steps=2,
        max_steps=20,
        learning_rate=2e-4,
        fp16=True,
        logging_steps=1,
        output_dir="outputs",
        optim="paged_adamw_8bit"
    ),
    data_collator=transformers.DataCollatorForLanguageModeling(tokenizer, mlm=False),
)
model.config.use_cache = False  # silence the warnings. Please re-enable for inference!
trainer.train()

# Inference example
model.config.use_cache = False
text = """HUMAN: Hello
MESSAGE: Welcome to pizza john
ORDER DETAILS: {}
RELEVANCY:unknown
ORDER CONFIRMED:no
---
HUMAN: Who is the president of the US?
MESSAGE: I'm sorry, but I only process pizza orders.
ORDER DETAILS: {}
RELEVANCY: No
ORDER CONFIRMED: No
---
HUMAN: can i order some pizza please
"""
device = "cuda:0"

inputs = tokenizer(text, return_tensors="pt").to(device)
outputs = model.generate(**inputs, max_new_tokens=20)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))

# colab huggingface
import locale
locale.getpreferredencoding = lambda: "UTF-8"
!python -m pip install huggingface_hub
!huggingface-cli login --token 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

# upload model to HF (no need to create repo first, it will create adapter_config and adapter_model)
model.push_to_hub("notzero/testlora2", use_auth_token=True)

# Then need to merge lora with base model (use kaggle, has 30GB memory -> if not using GPU)
!pip install transformers
!pip install peft
!pip install sentencepiece

!git clone https://github.com/ggerganov/llama.cpp
#!git clone https://github.com/project-baize/baize-chatbot
!git clone https://github.com/x4080/testqlora.git

#!python /content/baize-chatbot/merge_lora.py \
#--base decapoda-research/llama-7b-hf \
#--target ~/model_weights/baize-7b \
#--lora notzero/testlora2

!python /content/testqlora/merge_lora.py \
--base decapoda-research/llama-7b-hf \
--target ~/model_weights/mergeqlora \
--lora notzero/testlora2

!cd /kaggle/working/llama.cpp && mkdir qmodel && mv /root/model_weights/mergeqlora /kaggle/working/llama.cpp/qmodel/temp
#!mv /kaggle/working/llama.cpp/qmodel/7B/tokenizer.model /kaggle/working/llama.cpp/qmodel/

# create dataset first in web
!python -m pip install huggingface_hub
!huggingface-cli login --token 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

!cd /kaggle/working/llama.cpp && mkdir qmodel && mv /root/model_weights/mergeqlora /kaggle/working/llama.cpp/qmodel/temp

# upload to modelcombined
from huggingface_hub import HfApi
api = HfApi()
api.upload_folder(
    folder_path="/kaggle/working/llama.cpp/qmodel/temp",
    repo_id="notzero/modelcombined",
    repo_type="dataset",
)

!cd llama.cpp && make

#cd /kaggle/working/llama.cpp

!cd /kaggle/working/llama.cpp && python convert.py /root/modelcombined

# upload .bin ggml file
from huggingface_hub import HfApi
api = HfApi()
api.upload_file(
    path_or_fileobj="/root/modelcombined/ggml-model-f16.bin",
    path_in_repo="ggml-model-f16.bin",
    repo_id="notzero/modelcombined",
    repo_type="dataset",
)
