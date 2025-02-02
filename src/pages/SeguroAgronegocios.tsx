import InsurancePage from "@/components/InsurancePage";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Leaf } from "lucide-react";

const SeguroAgronegocios = () => {
    return (
        <InsurancePage
            title="AGRONEGÓCIOS"
            descriptions={[
                'O seguro que protege o produtor rural de danos à lavoura causados por eventos da natureza, dentre os quais, destacamos:',
                '- Granizo e Geada',
                'Importante: Para cada cultura, estudamos as coberturas, seguradoras e subvenção que melhor se adequam as suas necessidades.'
            ]}
            icon={<Leaf size={48} />}
            imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&h=800&fit=crop"
            buttons={[{
                icon: <MdOutlineWhatsapp className="mr-2" />,
                label: "Consulte-nos",
                action: () => window.open('https://api.whatsapp.com/send?phone=5519996076931&text=Ol%C3%A1%2C%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20seguro%20agr%C3%ADcola.', '_blank')
            }]}
        />
    )
};

export default SeguroAgronegocios;

