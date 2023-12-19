#!/usr/bin/python3
class Square:
    """Class Square that defines a square."""

    def __init__(self, size=0):
        """Initialize the Square instance with an optional size."""
        self.__size = size
        self.__validate_size()

    def __validate_size(self):
        """Validate the size attribute."""
        if not isinstance(self.__size, int):
            raise TypeError("size must be an integer")
        elif self.__size < 0:
            raise ValueError("size must be >= 0")
