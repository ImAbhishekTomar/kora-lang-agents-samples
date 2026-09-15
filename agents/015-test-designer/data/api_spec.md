# Create widget
POST /widgets
Body: {"name": string (1..80), "color": one of red|green|blue}
Returns 201 with id and name.
Returns 400 for malformed JSON, 401 without a token, 409 for duplicate name, and 422 for invalid fields.

