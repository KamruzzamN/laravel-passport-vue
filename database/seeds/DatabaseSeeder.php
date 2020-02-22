<?php

use Illuminate\Database\Seeder;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Mr Zaman',
            'email' => 'login@gmail.com',
            'password' => bcrypt('1234')
        ]);
    }
}
