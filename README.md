# fullstack_sf_node

<h3>Symfony:</h3>
install and run:<br/>
composer install <br/>
php bin/console server start<br/>
http://localhost/{your-project-name}/booksapi/public/api<br/>
http://localhost/{your-project-name}/booksapi/public/api<br/>
http://localhost/{your-project-name}/booksapi/public/api/books<br/>
http://localhost/{your-project-name}/booksapi/public/api/categories<br/>

-----------------------

Run migration:<br/>
php bin/console doctrine:schema:create<br/>
php bin/console doctrine:schema:update --force<br/>

Basic sql data:<br/>
booksapi.sql<br/>

Generate LexikJWTAuthenticationBundle<br/>
resource: https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md<br/><br/>

$ mkdir -p config/jwt<br/>
$ openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096<br/>
$ openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout<br/>

Configure the SSH keys path in your config/packages/lexik_jwt_authentication.yaml :<br/>

lexik_jwt_authentication:<br/>
    secret_key: '%kernel.project_dir%/config/jwt/private.pem' # required for token creation<br/>
    public_key: '%kernel.project_dir%/config/jwt/public.pem'  # required for token verification<br/>
    pass_phrase: 'your_secret_passphrase' # required for token creation, usage of an environment variable is recommended<br/>
    token_ttl: 3600<br/>


check jwt token validation:<br/>
http://localhost/{your-project-name}/booksapi/public/api/login_check
<br/>

Folder Structure:

booksapi
- config
    - api_platform
    - jwt
    - packages
    - routes
- src
    - controller
    - entity
    - migration
    - repository
- test
    - BookTest
- .env

-----------------------

<h3>Angular:</h3>
npm install<br/>
npm start<br/>
http://localhost:4200/login<br/>
<br/>