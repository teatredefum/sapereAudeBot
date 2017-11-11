With ejs you can have

<% code %> 

... which is code that is evaluated but not printed out.

<%= code %>

... which is code that is evaluated and printed out (escaped).

<%- code %>

... which is code that is evaluated and printed out (not escaped).

Since you want to print your variable and NOT escape it, your code would be the last type (with the -<%). In your case:

<%- my_form_content %>