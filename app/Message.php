<?php

namespace App;
use App\User;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'category', 'date_envoie', 'sujet','message','sender_id','receiver_id','isRead'
    ];
    public function User(){
        $this->belongsTo('App\User');
    }
}

