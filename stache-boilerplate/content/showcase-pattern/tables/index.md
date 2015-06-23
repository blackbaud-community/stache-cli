---
layout: layout-sidebar
order: 10
name: Tables
description: Forget markdown for tables, bootstrap table classes look awesome. 
icon: fa fa-table
---

# Tables

There are a different ways to create tables using markdown.  Each method will probably leave you flat. The tables simply don't look that good.  A better way is to leverage html and <a href="#bootstrap-tables" class="smooth-scroll">bootstrap table</a> classes.  

## Bootstrap Tables

You can also use HTML for table markup with html tags such as `table`, `thead`, `tbody`, `tfoot`, `tr`, `td`, `th`.

Here is an example of using <a href="http://getbootstrap.com/css/#tables">bootstap's table styling</a> to: 

- Add `table-hover` to enable a hover state on table rows within a `<tbody>`
- Add `table-striped` to add zebra-striping to any table row within the `<tbody>`
- Create responsive tables by wrapping any `table` in `table-responsive` to make them scroll horizontally on small devices 



<pre><code class="language-markup">
&lt;div class="table-responsive">
  &lt;table class="table table-striped table-hover">
    &lt;thead>
		&lt;tr>
			&lt;th>Query Parameter&lt;/th>
			&lt;th>Description&lt;/th>
		&lt;/tr>
	&lt;/thead>
	&lt;tbody>
	&lt;tr>
		&lt;td>client_id&lt;/td>
		&lt;td>&lt;i>Required&lt;/i>.  The &lt;b>Client ID&lt;/b> value provided to you by Blackbaud when you register your application.  See &lt;a href="https://tools.ietf.org/html/rfc6749#section-4.1.1"> rfc6749 section 4.1.1&lt;/a> for more info.&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td>redirect_uri&lt;/td>
		&lt;td>&lt;i>Required&lt;/i>.  The URI to redirect to after the user grants/denies permission. This URI needs to have been entered in the Redirect URI whitelist that you specified when you registered your application. The value of redirect_uri here must exactly match one of the values you entered when you registered your application, including upper/lowercase, terminating slashes, etc. See &lt;a href="https://tools.ietf.org/html/rfc6749#section-4.1.1"> rfc6749 section 4.1.1&lt;/a>.&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td>state&lt;/td>
		&lt;td class="column-2">&lt;i>Recommended Best Practice&lt;/i>.  An opaque value used by the client application to maintain state between the request and callback.  The authorization service includes the value when redirecting the user back to the client application.  The &lt;b>state&lt;/b> parameter is intended to preserve some state object set by the client in the request, and make it available to the client in the response.  The main security reason for this is to stop Cross Site Request Forgery (XRSF) by including something in the request that the client can verify in the response but that an attacker could not know.  An example of this would be a hash of the session cookie or a random value stored in the server linked to the session.  See &lt;a href="https://tools.ietf.org/html/rfc6749#section-4.2.1"> rfc6749 section 4.2.1&lt;/a> for more info.&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td>response_type&lt;/td>
		&lt;td>&lt;i>Required&lt;/i>.  The value must be set to &lt;code>code&lt;/code>.&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td>scope&lt;/td>
		&lt;td>Optional. A space-separated list of scopes: see Using Scopes. If no scopes are specified, authorization will be granted to TBD.&lt;/td>
	&lt;/tr>
	&lt;/tbody>
  &lt;/table>
&lt;/div>
</code></pre>

This example produces a nicely responsive, boot-strappy striped table: 

<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>
		<tr>
			<th>Query Parameter </th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
	<tr>
		<td>client_id</td>
		<td><i>Required</i>.  The <b>Client ID</b> value provided to you when you registered your application.  See <a href="https://tools.ietf.org/html/rfc6749#section-4.1.1"> rfc6749 section 4.1.1</a> for more info.</td>
	</tr>
	<tr>
		<td>redirect_uri</td>
		<td><i>Required</i>.  The URI to redirect to after the user grants/denies permission. This URI needs to have been entered in the Redirect URI whitelist that you specified when you registered your application. The value of redirect_uri here must exactly match one of the values you entered when you registered your application, including upper/lowercase, terminating slashes, etc. See <a href="https://tools.ietf.org/html/rfc6749#section-4.1.1"> rfc6749 section 4.1.1</a>.</td>
	</tr>
	<tr>
		<td>state</td>
		<td class="column-2"><i>Recommended Best Practice</i>.  An opaque value used by the client application to maintain state between the request and callback.  The authorization service includes the value when redirecting the user back to the client application.  The <b>state</b> parameter is intended to preserve some state object set by the client in the request, and make it available to the client in the response.  The main security reason for this is to stop Cross Site Request Forgery (XRSF) by including something in the request that the client can verify in the response but that an attacker could not know.  An example of this would be a hash of the session cookie or a random value stored in the server linked to the session.  See <a href="https://tools.ietf.org/html/rfc6749#section-4.2.1"> rfc6749 section 4.2.1</a> for more info.</td>
	</tr>
	<tr>
		<td>response_type</td>
		<td><i>Required</i>.  The value must be set to <code>code</code>.</td>
	</tr>
	
	<tr>
		<td>scope</td>
		<td>Optional. A space-separated list of scopes: see Using Scopes. If no scopes are specified, authorization will be granted to TBD.</td>
	</tr>
	</tbody>
  </table>
</div>
