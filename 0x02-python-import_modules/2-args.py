#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    argc = len(argv) - 1
    print("{} argument{}{}:".format(
        argc,
        's' if argc != 1 else '',
        '' if argc == 0 else 's'
        ))
    for i, arg in enumerate(argv[1:], start=1):
        print("{}: {}".format(i, arg))
