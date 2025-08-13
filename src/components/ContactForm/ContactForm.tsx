import React, { useState } from 'react';
import { texts } from '../../assets/texts';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  lang: 'es' | 'en';
}

export const ContactForm = ({ lang }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    area: '',
    comment: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles['contact-form-section']}>
      <h2 className={styles['contact-form-title']}>
        {texts[lang].contactForm.title}
      </h2>
      <form onSubmit={handleSubmit} className={styles['contact-form']}>
        <input
          type="text"
          name="name"
          placeholder={texts[lang].contactForm.namePlaceholder}
          value={formData.name}
          onChange={handleInputChange}
          className={styles['form-input']}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder={texts[lang].contactForm.emailPlaceholder}
          value={formData.email}
          onChange={handleInputChange}
          className={styles['form-input']}
          required
        />
        
        <input
          type="tel"
          name="phone"
          placeholder={texts[lang].contactForm.phonePlaceholder}
          value={formData.phone}
          onChange={handleInputChange}
          className={styles['form-input']}
          required
        />
        
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className={styles['form-select']}
          required
        >
          <option value="">{texts[lang].contactForm.countryPlaceholder}</option>
          <option value="argentina">Argentina</option>
          <option value="bolivia">Bolivia</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="colombia">Colombia</option>
          <option value="ecuador">Ecuador</option>
          <option value="paraguay">Paraguay</option>
          <option value="peru">Perú</option>
          <option value="uruguay">Uruguay</option>
          <option value="venezuela">Venezuela</option>
          <option value="mexico">México</option>
          <option value="otros">{texts[lang].contactForm.otherCountry}</option>
        </select>
        
        <input
          type="text"
          name="company"
          placeholder={texts[lang].contactForm.companyPlaceholder}
          value={formData.company}
          onChange={handleInputChange}
          className={styles['form-input']}
          required
        />
        
        <input
          type="text"
          name="area"
          placeholder={texts[lang].contactForm.areaPlaceholder}
          value={formData.area}
          onChange={handleInputChange}
          className={styles['form-input']}
          required
        />
        
        <textarea
          name="comment"
          placeholder={texts[lang].contactForm.commentPlaceholder}
          value={formData.comment}
          onChange={handleInputChange}
          className={styles['form-textarea']}
          rows={4}
        />
        
        <label className={styles['checkbox-label']}>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
            className={styles['form-checkbox']}
          />
          {texts[lang].contactForm.newsletterText}
        </label>
        
        <button type="submit" className={styles['form-button']}>
          {texts[lang].contactForm.submitButton}
        </button>
      </form>
    </section>
  );
};