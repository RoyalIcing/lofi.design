import Head from 'next/head'

export default ({ title, children }) => (
    <main>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
						{ title && <title children={ title } /> }
        </Head>
        <style jsx global>{`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: inherit;
}

html {
	font-size: 18px;
	font-size: calc(112.5% + 2 * (100vw - 600px) / 400);
	background: #fef8fc;
	color: #FF3D76;
}

body {
	box-sizing: border-box;
	max-width: 100vw;
	margin: auto;
	/*padding: 0 0.75rem;*/
	line-height: 1.333333333rem;
	font-family: system, "-apple-system", "-webkit-system-font", BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "freesans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	-webkit-hypens: auto; -ms-hypens: auto; hypens: auto;
}

section article {
	margin-bottom: 2.666666666rem;
}

header > *,
section > *,
section article > *,
aside > *,
nav > div
{
	max-width: 30rem;
  padding: 0 1rem;
	margin-left: auto;
	margin-right: auto;
}
section > div,
section article > div {
	max-width: none;
}

header > *,
article > *,
section > *,
footer > * {
	position: relative;
	font-size: 1rem;
	line-height: 1.333333333rem;
	top: 0.3333333329999999rem;
}
header > *,
article > *,
section > * {
	margin-bottom: 1.333333333rem;
}

header h1,
header h2 {
	text-align: center;
}

header h1 {
	position: relative;
	font-size: 2rem;
	line-height: 2.666666666rem;
	top: 0.6666666659999998rem;

	font-weight: bold;
}

section h2 {
	position: relative;
	font-size: 1.2rem;
	line-height: 1.333333333rem;
	top: 0.13333333299999994rem;

	font-weight: bold;
}
section h3,
section dt {
  font-size: 1rem;
	font-weight: bold;
}
section pre {
	overflow: auto;
	max-width: none;
	width: calc(50vw + (30rem / 2));
  margin-right: 0;
	padding: 0 1rem;
	background-color: white;
}

section dt {
	margin-bottom: 0;
	font-weight: bold;
}
section dd {
	margin-left: 1em;
	margin-right: 0;
}

section a {
	/*color: #9647E8;
	color: #be30ff;
	color: #ce47e8;
	color: #dd30ff;
	color: #d230ff;
	color: #b04bf2;
	color: #ad45cf;*/
	color: #CD00CD;
	text-decoration: none;
	
	border-bottom: 1px solid currentColor;
}
section > a,
section > button {
	display: inline-block;
	font-size: 1rem;
	text-align: center;
	background-color: #FF3D76;
	color: #fef8fc;
	padding: 0.5rem 0.7rem;
	border: none;
	border-radius: 3px;
}
section > a + a,
section > button + button {
	margin-left: 0.5rem;
}
section > a.primary,
section > button.primary {
	display: block;
	width: 100%;
	padding: 1rem 0.7rem;
}
section > a > h2 {
	top: 0;
}

nav.primary {
	padding: 0.5rem 1.7rem;
	border-bottom: 1px solid #FF3D76;
	background-color: white;
}
nav.primary:last-child {
  border-top: 1px solid #FF3D76;
  border-bottom: none;
}
nav.primary a.active {
  font-weight: bold;
  //color: white;
  //background-color: #FF3D76;
}

a {
	background-color: white;
	text-decoration: none;
	color: inherit;
}

input, textarea {
	padding: 0 0.25rem;
	line-height: 1.3;
	color: #CD00CD;
	background-color: white;
	border: solid 1px #CD00CD;
}
`}
</style>
        <div>
            { children }
        </div>
    </main>
)