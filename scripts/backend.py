def process_message(name: str, message: str) -> str:
    return f"Name: {name}, Nachricht: {message}"

if __name__== "__main__":
    name = input("Gib deinen Namen ein: ")
    message = input("Gib deine nachricht ein: ")
    print(process_message(name, message)) 
