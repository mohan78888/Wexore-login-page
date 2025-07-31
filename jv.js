<script>
    document.getElementById("login").addEventListener("click", function () {
        alert("Login functionality will be added soon!");
    });

    document.getElementById("signup").addEventListener("click", function () {
        alert("Signup functionality will be added soon!");
    });

    const upvoteButtons = document.querySelectorAll("#upvote");
    const answerButtons = document.querySelectorAll("#answer");

    upvoteButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("You upvoted this question!");
        });
    });

    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Answer submission coming soon!");
        });
    });
</script>

