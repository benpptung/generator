<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ title }}</title>
    <link type="text/css" rel="stylesheet" href="/css/base/site.min.css">

    {% block header %}{% endblock %}
</head>
<body>
{% block content %}{% endblock %}

<!-- start of javascript: All of the js should be placed after this so they are at the end of the document-->
<!-- ========================================= -->
<script src="/js/base/site.min.js"></script>
{% block footer %}{% endblock %}
</body>
</html>