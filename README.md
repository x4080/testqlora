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

tokenizer = LlamaTokenizer
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