<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class BooksTest extends ApiTestCase
{
    public function testGetCollection()
    {
 
        $client = static::createClient();
        $client->request('GET', '/api/books');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        // your assertions here...
        
        // static::createClient()->request(...);

        // Asserts that the returned JSON is equal to the passed one
        //$this->assertJsonEquals(/* a JSON document as an array or as a string */);

        // Asserts that the returned JSON is a superset of the passed one
        //$this->assertJsonContains(/* a JSON document as an array or as a string */);

        // justinrainbow/json-schema must be installed to use the following assertions

        // Asserts that the returned JSON matches the passed JSON Schema
        //$this->assertMatchesJsonSchema(/* a JSON Schema as an array or as a string */);


        // Asserts that the returned JSON is validated by the JSON Schema generated for this resource by API Platform
        // For collections
        //$this->assertMatchesResourceCollectionJsonSchema(Book::class);

        // And for items
        //$this->assertMatchesResourceItemJsonSchema(Book::class);
    }
}