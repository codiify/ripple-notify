<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    @vite(['resources/css/app.css'])
</head>
<body>

<div id="app">
    <h1>Welcome to My Laravel Project</h1>
    <button onclick="showToast()">Show Toast</button>
</div>

<script>
    function showToast() {
        // Example usage of RippleNotify
        ripple.success('Hello, World!');
    }
</script>
<!-- Your HTML content -->

@vite(['resources/js/app.js'])
</body>
</html>
