<input class='input' placeholder='Enter some values here' value='{{raw}}'/>
<p> Raw : "{{raw}}" </p>
<p>Binary "{{binary}}"</p>
<p>
{{#isLink}}
<a link='{{raw}}' target='_blank'> also work as a link </a>
{{/isLink}}
{{^isLink}}
<span> not a link. </span>
{{/isLink}}
</p>