
const bookMarks = document.getElementById('bookmarks');
const about = document.getElementById('about');
const works = document.getElementById('works');
const workBlogs = document.getElementById('work_blogs');

const BOOKMARK_ABOUT_CLASS = 'bookmark1';
const BOOKMARK_WORKS_CLASS = 'bookmark2';
const BOOKMARK_WORK_BLOGS_CLASS = 'bookmark3';

function createText(event) {
  describe = document.createElement('span');
  describeID = event.target.id;

  if (describeID === 'about') {
    describe.classList.add(BOOKMARK_ABOUT_CLASS);
    describe.innerText = 'About Me!';
  } else if (describeID === 'works') {
    describe.classList.add(BOOKMARK_WORKS_CLASS);
    describe.innerText = 'My Works';
  } else if (describeID === 'work_blogs') {
    describe.classList.add(BOOKMARK_WORK_BLOGS_CLASS);
    describe.innerText = 'Work Blogs';
  }

  bookMarks.appendChild(describe);
}

function deleteText() {
  const describeToRm = bookMarks.querySelector('span:last-child');
  describeToRm.remove()
}

about.addEventListener('mouseover', createText);
works.addEventListener('mouseover', createText);
workBlogs.addEventListener('mouseover', createText);

about.addEventListener('mouseout', deleteText);
works.addEventListener('mouseout', deleteText);
workBlogs.addEventListener('mouseout', deleteText);