import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ.get('account_sid')
auth_token =  os.environ.get('auth_token')
client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hi there',
    from_= os.environ.get('from_number'),
    to= os.environ.get('to_number'),
)

print(message.sid)
