import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <h3 className="text-3xl font-bold text-orange-500">1200+</h3>
              <p className="text-muted-foreground">Projects completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <h3 className="text-3xl font-bold text-orange-500">400+</h3>
              <p className="text-muted-foreground">Satisfied clients</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
              <h3 className="text-3xl font-bold text-orange-500">150+</h3>
              <p className="text-muted-foreground">Awards won</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
