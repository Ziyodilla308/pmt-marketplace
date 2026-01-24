import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import {useTranslation} from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      name: 'Erdogan Dikagac',
      role: t("contactFounder"),
      phone: '+998 93 184 83 25',
      phone2: '+998 90 951 17 24',
      email: 'mac_erdogan@yahoo.com',
    },
    {
      name: 'Ozcan Sevinc',
      role: t("contactMarketing"),
      phone: '+998 93 184 78 08',
      email: 'mac_erdogan@yahoo.com',
    },
    {
      name: 'Ruslan Sattarov',
      role: t("contactDirector"),
      phone: '+998 93 184 83 22',
      email: 'mac_erdogan@yahoo.com',
    },
    {
      name: 'Ziyodulla Zokhirov',
      role: t("contactLead"),
      phone: '+998 99 906 65 60',
      email: 'mac_erdogan@yahoo.com',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("contactUs")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contactDescription")}
          </p>
        </div>

        {/* Contact Persons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("ourTeam")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {contact.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-center mb-1">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{contact.role}</p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                    <a
                        href={`tel:${contact.phone2}`}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone2}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors break-all"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      {contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Location */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("contactVisitOffice")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("contactMainOffice")}</h3>
                    <p className="text-muted-foreground">
                      Ташкент, Яккасарайский район, улица Махмуда Тараби, 29А
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+998 93 184 83 25</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+998 90 951 17 24</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>mac_erdogan@yahoo.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[400px] bg-secondary flex items-center justify-center">
                  <iframe
                      src="https://yandex.uz/map-widget/v1/?ll=69.257454%2C41.283822&mode=poi&poi%5Bpoint%5D=69.257647%2C41.283952&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D34602157096&z=20.11"
                      width="100%"
                      height="100%"
                      style={{border: 0, minHeight: '400px'}}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("contactVisitSclad")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("contactMainWarehouse")}</h3>
                    <p className="text-muted-foreground">
                      Янгиюль, Ташкентская область
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+998 93 184 83 25</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+998 90 951 17 24</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>mac_erdogan@yahoo.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[400px] bg-secondary flex items-center justify-center">
                  <iframe
                      src="https://yandex.uz/maps/189652/yangiyo'l/house/YkAYdgNnSEIFQFprfX1xcHxjZw==/?ll=69.047101%2C41.101309&z=18.62
"
                      width="100%"
                      height="100%"
                      style={{border: 0, minHeight: '400px'}}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
