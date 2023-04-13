if ($) {
    $(() => {
        $("#input-name").keyup(() => {
            console.log();
            $("#greet").text(`Hello ${$("#input-name").val()}!`);
        });
    });
} else {
    console.log("jquery not available");
}
