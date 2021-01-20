@extends('layouts.user')
@push('below_css')
@endpush
@section('content')

    <login></login>

    @include('includes.user.subsribe-us')
    @include('includes.user.brand-area')
@endsection
@push('below_script')
@endpush
