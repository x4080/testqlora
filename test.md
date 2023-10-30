# Instruction : Choose from one of ('greetings', 'order pizza','ask for menu','change pizza ordered','additional order' or 'other topic') for response
below is example
# Context : empty
# Input : Hello
# Response : Related to : greetings
# Context : empty
# Input : who is trump
# Response : other topic
# Context : empty
# Input : I want to order some pizza please
# Response : Related to : order pizza, detail : empty
# Context : empty
# Input : I want 2 pepperoni pizza please
# Response : Related to : order pizza, detail : pepperoni pizza,2
# Context : empty
# Input : what pizza do you have
# Response : Related to : ask for menu
# Context : cheese pizza,1
# Input : change that to pepperoni pizza please
# Response : Related to : change pizza ordered, detail : pepperoni pizza,1
# Context : sausage pizza,1
# Input : add 2 cheese pizza please
# Response : Related to : additional order, detail : cheese pizza,2
solve below based on example
# Context : pepperoni pizza,2 cheese pizza, 1
# Input : make that cheese pizza to sausage pizza please
# Response :