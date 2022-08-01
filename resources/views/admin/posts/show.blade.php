@extends('layouts.app')

@section('content')
    <div class="container">
        <img src="{{asset('storage/' . $post->immagine)}}" alt="{{$post->title}}">
        <h1>{{$post->title}}</h1>
        <hr>
        <p>{{$post->content}}</p>
        @foreach ($post->tags as $tag)
        <small><strong>#{{$tag->name}}</strong></small>
        @endforeach
    </div>
@endsection