import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import styles from './HeaderContent.module.css';

const HeaderContent = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contactform}>
                <div className={styles.topbtn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

                <form>
                    <div className={styles.formcontrol}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.formcontrol}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.formcontrol}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8"/>
                    </div>
                    <div>
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
            </div>
            <div className={styles.contactimg}>
                <img src="/images/contactus.avif" alt="contact-img" />
            </div>
        </section>
    );
};

export default HeaderContent;