import InsurancePage from "@/components/InsurancePage";
import { HandCoins } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";

const SeguroEmprestimo = () => {
    return (
        <InsurancePage
            title="EMPRÉSTIMO E FINANCIAMENTO PORTO BANK "
            descriptions={[
                "FINANCIAMENTO",
                "Parcelas que cabem no bolso, confira:",
                "- Até 100% do valor do carro novo ou usado*",
                "- Até 60 meses - Contratação 100% digital",
                "- Até 45 dias para pagar a 1ª parcela",
                "- Possibilidade de contratar Seguro Prestamista",
                "- Pagamento no Cartão de Crédito Porto Bank, sem comprometer o limite e com acúmulo de pontos PortoPlus",
                "*Carros de passeio com até 10 anos de uso, utilitários sob consulta.",
                "EMPRÉSTIMO COM GARANTIA DE VEÍCULO",
                "O carro é dado em garantia no empréstimo, mas continua na sua garagem. Pode quitar suas dívidas ou unir todas com juros reduzidos.",
                "• Contratação 100% digital",
                "• Até 48 meses para pagar • Proteção para crédito e família com o Seguro Prestamista",
                "• Taxa personalizada para cada perfil de cliente",
                "• Empréstimo de até 80% do valor do seu carro seminovo com até 12 anos de uso, quitado e livre de ônus ou multas",
                "EMPRÉSTIMO COM GARANTIA DE IMÓVEL",
                "Com taxas menores e prazos maiores, você pode trocar suas dívidas caras (cheque especial, cartão de crédito...) ou investir em seu próprio negócio.",
                "• Contratação 100% digital",
                "• Crédito de até 60% de um imóvel ou terreno",
                "• Carência de até 6 meses",
                "• Pagamento em até 20 anos",
                "• Serviço de Concierge acompanha toda jornada até a liberação do crédito",
                "• Imóvel não precisa estar quitado",
                "• Empréstimos a partir de R$ 30 mil",
                "Para todos esses produtos, a liberação do crédito está sujeita à análise, à revisão das condições cadastrais no momento da solicitação e às demais condições do produto."
            ]}
            icon={<HandCoins size={48} />}
            imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&h=800&fit=crop"
            buttons={[
                {
                    icon: <MdOutlineWhatsapp className="mr-2" />,
                    label: "Fale conosco",
                    action: () => window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.', '_blank')
                }
            ]}
        />
    )
}

export default SeguroEmprestimo;