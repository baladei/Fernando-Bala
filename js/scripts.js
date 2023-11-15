emailjs.init("03hH7xEcfIHb7L8Nt");

const user = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    sendEmail();

    user.value = "";
    emailInput.value = "";
    message.value = "";
  });

function sendEmail() {
  const serviceID = "service_1i0w13y";
  const templateID = "template_eodxd9f";

  const userName = user.value;
  const userEmail = emailInput.value;
  const userMessage = message.value;

  console.log(userName);
  console.log(userEmail);
  console.log(userMessage);

  const templateParams = {
    to_name: userName,
    from_name: userEmail,
    message: userMessage,
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    () => {
      alert("E-mail enviado com sucesso:");
    },
    (error) => {
      console.error("Erro ao enviar e-mail:", error);
    }
  );
}
