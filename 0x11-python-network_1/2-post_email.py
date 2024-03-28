#!/usr/bin/python3
"""
Takes in a URL and an email,
sends a POST request to the passed URL with the email as a parameter,
and displays the body of the response (decoded in utf-8)
"""
import sys
import urllib.request
import urllib.parse
if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]
    data = {'email': email}
    data_encoded = parse.urlencode(data).encode('ascii')
    with request.urlopen(url, data=data_encoded) as response:
        print(response.read().decode('utf-8'))
