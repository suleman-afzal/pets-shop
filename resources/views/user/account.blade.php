@extends('layouts.user')
@push('below_css')
@endpush
@section('content')
    <breadcrumb ></breadcrumb>
{{--    {{dd(auth()->user())}}--}}
{{--    @if (auth()->check())--}}
    <account-information ></account-information>


    @include('includes.user.brand-area')
@endsection
@push('below_script')
@endpush
