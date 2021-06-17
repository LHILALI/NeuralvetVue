<?php

namespace App\Http\Controllers;

use App\Message;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{

    public function getReceiverName($receiverid) {
        return User::where('id',$receiverid)->first()->name;
    }
    public function getSenderName($senderid) {
        return User::where('id',$senderid)->first()->name;
    }


    public function getReceivedMessages($id){

        $messages = [];
        $results = Message::where('receiver_id',$id)->orderBy('date_envoie', 'DESC')->get();
        foreach ($results as $result) {
            array_push($messages,[
                'id' => $result->id,
                'receiver' => $this->getReceiverName($result->receiver_id),
                'sender' => $this->getSenderName($result->sender_id),
                'sujet' => $result->sujet,
                'message' => $result->message,
                'date' => Carbon::parse($result->date_envoie)->diffForHumans(),
                'category' => $result->category,
                'isRead' => $result->isRead
            ]);
        };
 
        return json_encode($messages);

    }
    
    public function getSentMessages($id) {
     

        $messages = [];
        $results = Message::where('sender_id',$id)->orderBy('date_envoie', 'DESC')->get();
        foreach ($results as $result) {
            array_push($messages,[
                'id' => $result->id,
                'receiver' => $this->getReceiverName($result->receiver_id),
                'sender' => $this->getSenderName($result->sender_id),
                'sujet' => $result->sujet,
                'message' => $result->message,
                'date' => Carbon::parse($result->date_envoie)->diffForHumans(),
                'category' => $result->category,
                'isRead' => $result->isRead
            ]);
        };
 
        return json_encode($messages);
    }

    public function getMessage($id){
        $message = Message::where('id',$id)->first();
        
        $message->update(['isRead' => true ]);

        $detailedMessage = [];
            array_push($detailedMessage,[
                'id' => $message->id,
                'receiver' => $this->getReceiverName($message->receiver_id),
                'sender' => $this->getSenderName($message->sender_id),
                'sujet' => $message->sujet,
                'message' => $message->message,
                'date' => Carbon::parse($message->date_envoie)->diffForHumans(),
                'category' => $message->category,
            ]);

        return json_encode($detailedMessage);
    }

    public function sendMessage(Request $req){
       $sender =  $req[0];
       $receivers =  $req[1];
       $subject =  $req[2];
       $content =  $req[3];
       foreach ($receivers as  $receiver) {
        Message::create([
            'category' => 'User',
            'date_envoie' => Carbon::now(),
            'sujet' => $subject,
            'message' => $content,
            'sender_id' => $sender,
            'isRead' => false,
            'receiver_id'=> User::where('name',$receiver['name'])->first()->id
        ]);
    }}

    public function countMessages($id) {
        $allMessages = Message::where('receiver_id',$id)->get();
        $unreadMessages = Message::where('receiver_id',$id)->where('isRead',false)->get();
        $countMessages = [count($allMessages),count($unreadMessages)];
        return $countMessages;
    }
    
}
