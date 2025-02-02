import InsurancePage from '../../components/InsurancePage';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Bike } from 'lucide-react';

const SeguroProdutosDiversos = () => {
    return (
        <InsurancePage
            title='Produtos Diversos'
            descriptions={[
                'Consórcio',
                'Equipamentos Portáteis',
                'Previdência Privada',
                'Seguro Bike'
            ]}
            icon={<Bike size={48} />}
            buttons={[{
                icon: <MdOutlineWhatsapp className='mr-2' />,
                label: 'Fale Conosco',
                action: () => window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.', '_blank')
            }]}
         />
    )
};

export default SeguroProdutosDiversos;