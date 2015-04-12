{% extends './base/base.swig' %}

{% set title = error.status + ' Error: ' + message %}


{% block content %}
	<h1>{{ title }}</h1>
    <p>{{ error.status }}</p>
    <pre>{{ error.stack }}</pre>
{% endblock %}