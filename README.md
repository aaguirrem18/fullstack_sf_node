# fullstack_sf_node

symfony:
http://localhost/fullstack_sf_node/booksapi/public/api
http://localhost/fullstack_sf_node/booksapi/public/api/books
http://localhost/fullstack_sf_node/booksapi/public/api/categories

-----------------------

Generate LexikJWTAuthenticationBundle

resource: https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md

$ mkdir -p config/jwt
$ openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
$ openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout

Configure the SSH keys path in your config/packages/lexik_jwt_authentication.yaml :

lexik_jwt_authentication:
    secret_key:       '%kernel.project_dir%/config/jwt/private.pem' # required for token creation
    public_key:       '%kernel.project_dir%/config/jwt/public.pem'  # required for token verification
    pass_phrase:      'your_secret_passphrase' # required for token creation, usage of an environment variable is recommended
    token_ttl:        3600


Angular
http://localhost:4200/login