<form id="redeem-form">
  <input type="text" name="code" placeholder="Nhập mã bạn nhận được" required />
  <button type="submit">Xác nhận</button>
</form>

<script>
document.getElementById("redeem-form").onsubmit = async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const code = e.target.code.value;

  const res = await fetch("https://localhost:3000.repl.co/redeem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, code })
  });

  const data = await res.json();
  alert(data.message);
};
</script>
