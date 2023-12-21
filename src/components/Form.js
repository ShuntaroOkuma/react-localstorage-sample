import { useState, useEffect } from "react";

export const Form = () => {
  const [name, setName] = useState(() => {
    const saveText = localStorage.getItem("name");
    const initialValue = JSON.parse(saveText);
    return initialValue || "";
  });
  const [pwd, setPwd] = useState(() => {
    const saveText = localStorage.getItem("pwd");
    const initialValue = JSON.parse(saveText);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    console.log(name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("pwd", JSON.stringify(pwd));
    console.log(pwd);
  }, [pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`DBに保存しました。`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>あなたの名前: {localStorage.getItem("name")}</p>
        <p>Password: {localStorage.getItem("pwd")}</p>

        <h1>Full Name</h1>
        <input
          placeholder="名前を入力して下さい"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Password</h1>
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />

        <div>
          <br />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};
