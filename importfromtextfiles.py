from datasets import load_dataset
dataset = load_dataset('text', data_files={"train": ["train1.txt", "train2.txt"]})
print(dataset["train"])
#data = data.map(lambda samples: tokenizer(samples['text']), batched=True)
