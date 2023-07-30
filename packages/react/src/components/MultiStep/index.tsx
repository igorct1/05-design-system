import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  steps: number
  currentStep: number
}

export function MultiStep({ steps, currentStep }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>
      <Steps css={{ '--step-size': steps }}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
