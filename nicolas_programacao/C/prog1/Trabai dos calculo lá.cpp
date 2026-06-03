#include <stdio.h>
#include <math.h> 
#include <ctype.h>

int main(){
    int idade = 0, medic;
    float dose = 0, peso = 0;
    char genero, sinto, repetir;
    
    
do{

    
    do {
        printf("Qual a idade do paciente em meses?\n");
        scanf("%d", &idade);
        if (idade < 0 || idade > 120) {
            printf("Digite uma idade v�lida!!\n");
        }
    } while (idade < 0 || idade > 1440);

    
    do {
        printf("Qual o genero do paciente (M/F)?\n");
        scanf(" %c", &genero);
        genero = toupper(genero);

        if (genero == 'M') {
            printf("G�nero: Masculino\n");
        } else if (genero == 'F') {
            printf("G�nero: Feminino\n");
        } else {
            printf("Op��o inv�lida!!\n");
        }
    } while (genero != 'M' && genero != 'F'); 

    
    do {
        printf("Paciente apresenta sintomas? (S/N)\n");
        scanf(" %c", &sinto);
        if (sinto != 'S' && sinto != 's' && sinto != 'N' && sinto != 'n') {
            printf("Op��o inv�lida! Digite S para sim ou N para n�o.\n");
        }
    } while (sinto != 'S' && sinto != 's' && sinto != 'N' && sinto != 'n');

    
    do {
        printf("Qual o peso do paciente (em kg)?\n");
        scanf("%f", &peso);
        if (peso < 1) {
            printf("Peso inv�lido! O peso deve ser maior que 1 kg.\n");
        }
    } while (peso < 1);

    
    if (sinto == 'S' || sinto == 's') {
        printf("Escolha uma medica��o para calcular \n");
        printf(" 1 - Paracetamol \n 2 - Ibuprofeno \n 3 - Amoxicilina \n 4 - Dipirona \n 5 - Metformina \n 6 - Prednisona \n 7 - Salbutamol \n 8 - Omeprazol \n 9 - Loratadina \n 10 - Dexametasona\n");
        scanf("%d", &medic);
		
		
		switch (medic){
            case 1: // Paracetamol
                if (idade >= 3) { // Idade em meses
                    dose = peso * 15;
                    printf("\nCalculo para Paracetamol:\n");
                    printf("A dose recomendada e de %.2f mg por dose.\n", dose);
                    printf("Posologia: A cada 6 horas.\n");
                } else {
                    printf("\nParacetamol nao e recomendado para menores de 3 meses. Consulte um medico.\n");
                }
                break;

            case 2: // Ibuprofeno
                if (idade >= 6) { // Idade em meses
                    dose = peso * 10;
                    printf("\nCalculo para Ibuprofeno:\n");
                    printf("A dose recomendada e de %.2f mg por dose.\n", dose);
                    printf("Posologia: A cada 6 a 8 horas.\n");
                } else {
                    printf("\nIbuprofeno nao e recomendado para menores de 6 meses. Consulte um medico.\n");
                }
                break;

            case 3: // Amoxicilina
                dose = (peso * 25) / 2;
                printf("\nCalculo para Amoxicilina:\n");
                printf("A dose recomendada e de aproximadamente %.2f mg por dose.\n", dose);
                printf("Posologia: A cada 12 horas.\n");
                printf("AVISO: A dose de antibioticos deve ser SEMPRE confirmada por um medico.\n");
                break;

            case 4: // Dipirona
                dose = peso * 20;
                printf("\nCalculo para Dipirona:\n");
                printf("A dose recomendada e de %.2f mg por dose.\n", dose);
                printf("Posologia: A cada 6 horas.\n");
                break;

            case 5: // Metformina
                if (idade >= 10) { // Idade em anos
                    dose = (peso * 12.5) / 2;
                    printf("\nCalculo para Metformina:\n");
                    printf("A dose de exemplo e de aproximadamente %.2f mg por dose.\n", dose);
                    printf("Posologia: Duas vezes ao dia, com as refeicoes.\n");
                    printf("AVISO: Uso exclusivo para tratamento de Diabetes Tipo 2 sob estrita supervisao medica.\n");
                } else {
                    printf("\nMetformina nao e indicada para esta faixa etaria. Consulte um medico.\n");
                }
                break;

            case 6: // Prednisona
                dose = peso * 1.5;
                printf("\nCalculo para Prednisona:\n");
                printf("A dose recomendada e de aproximadamente %.2f mg por dia.\n", dose);
                printf("Posologia: A dose diaria pode ser dividida em 1 ou 2 tomadas.\n");
                printf("AVISO: Corticoide deve ser usado com cautela e apenas por indicacao medica.\n");
                break;

            case 7: // Salbutamol
                dose = peso * 0.15;
                printf("\nCalculo para Salbutamol (oral):\n");
                printf("A dose recomendada e de aproximadamente %.3f mg por dose.\n", dose);
                printf("Posologia: A cada 6 a 8 horas. A forma inalatoria e mais comum.\n");
                break;

            case 8: // Omeprazol
                dose = peso * 1.5;
                printf("\nCalculo para Omeprazol:\n");
                printf("A dose recomendada e de aproximadamente %.2f mg por dia.\n", dose);
                printf("Posologia: 1 vez ao dia, antes do cafe da manha.\n");
                break;

            case 9: // Loratadina
                if (peso >= 30) {
                    dose = 10;
                } else {
                    dose = 5;
                }
                printf("\nCalculo para Loratadina:\n");
                printf("A dose recomendada e de %.2f mg por dia.\n", dose);
                printf("Posologia: 1 vez ao dia.\n");
                break;

            case 10: // Dexametasona
                dose = peso * 0.2;
                printf("\nCalculo para Dexametasona:\n");
                printf("A dose recomendada e de aproximadamente %.3f mg por dia.\n", dose);
                printf("Posologia: A dose diaria pode ser dividida. Uso estrito sob indicacao medica.\n");
                break;

            default:
                printf("\nOpcao de medicamento invalida!\n");
                break;
        }
    } else {
        
        printf("\nComo o paciente nao apresenta sintomas, nenhum medicamento sera calculado.\n");
    }
	
	printf("\nDeseja calcular a dose para outro paciente? (S/N)\n");
        scanf(" %c", &repetir);

} while (repetir == 'S' || repetir == 's'); 

printf("\nPrograma finalizado. Obrigado!\n");
    
return 0;
}
