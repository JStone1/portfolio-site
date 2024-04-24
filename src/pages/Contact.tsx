import Layout from "@components/Layout/Layout";
import Form from "@components/Form/Form";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

const Contact = () => {
  return (
    <>
      <Layout footerMargin={0}>
        <div className="visually-hidden">
          {/* Have to include theme switcher to gain access to theme colours, hides it from view. */}
          <ThemeSwitcher />
        </div>
        <Form />
      </Layout>
    </>
  );
};

export default Contact;
