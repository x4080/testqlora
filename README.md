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