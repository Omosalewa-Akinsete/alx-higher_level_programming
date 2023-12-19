#!/usr/bin/python3
"""defines a class Square"""


class Square:
    """Square with private instance attribute size"""

    def __init__(self, size=0):
        """
        Args:
            size of a square
        """

        if type(size) is int:
            if size < 0:
                raise ValueError('size must be >= 0')
            else:
                self.__size = size
        else:
            raise TypeError('size must be integer')
