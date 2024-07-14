<script>
    function changeProjectImage(imageSrc, element) {
        document.getElementById('projectImage').src = imageSrc;

        const projectContents = document.querySelectorAll('.project-content');
        projectContents.forEach(content => {
            content.classList.remove('active');
        });

        element.classList.add('active');
    }
</script>
