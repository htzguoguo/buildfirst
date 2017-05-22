<p>Hello {{name}}, your order #{{orderId}} is now shiping. your order includes:</p>
<ul>
{{#items}}
<li>{{.}}</li>
{{/items}}
</ul>