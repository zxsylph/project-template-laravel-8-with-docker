<?php

namespace Tests\Feature;

use Tests\TestCase;

class DbConnectivityTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testDbConnectivity()
    {
        /** @var Connection $db */
        $db = $this->app->make("db");
        $row = $db->selectOne("SELECT 1 AS one");
        $this->assertEquals(1, $row->one);
    }
}
