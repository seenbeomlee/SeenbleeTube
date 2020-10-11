import axios from 'axios';

const addCommentForm = document.getElementById('jsAddComment');

const sendComment = async (comment) => {
  /* how to get URL from users address */
  const videoId = window.location.href.split('/videos/')[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: 'POST',
    data: {
      comment,
    },
  });
  console.log(response);
};

const handleSubmit = (event) => {
  /* prevent refresh */
  event.preventDefault();
  const commentInput = addCommentForm.querySelector('input');
  const comment = commentInput.value;
  sendComment(comment);
  /* clean commentInputFrom after user submit a comment */
  commentInput.value = '';
};

function init() {
  addCommentForm.addEventListener('submit', handleSubmit);
}

if (addCommentForm) {
  init();
}
