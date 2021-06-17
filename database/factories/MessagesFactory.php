<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    return [
        'category' => $faker->randomElement($array = array ('System','User')),
        'date_envoie' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'message' => $faker->text($maxNbChars = 200),
        'sujet' => $faker->text($maxNbChars = 50),
        'sender_id' => $faker->numberBetween($min = 1, $max = 10),
        'receiver_id' => $faker->numberBetween($min = 1, $max = 10),
        'isRead' => false
    ];
});
