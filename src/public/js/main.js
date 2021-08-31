const message = async () => {
  const response = await request("/api/users", "GET");
  if (response.status === "fail") {
    messageBox.innerHTML = `
    <p style="color: red; font-size: 1.8rem">${response.message}<p>
    <a style="font-size: 1.8rem" href="/login">Login</a>
    `;
  }
};

const users = async () => {
  const response = await request("/api/users", "GET");
  const users = response.data.users;
  let string = "";
  for (const user of users) {
    string += `
      <li>
        <p>${user.username}</p>
      </li>
      `;
  }
  usersList.innerHTML = string;
  // if(response.status === "success") {
  //     let string = ""
  //     for
  //     usersList.innerHTML
  // }
};

users();

message();
