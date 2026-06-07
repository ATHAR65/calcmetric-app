import SchemaMarkup from "./SchemaMarkup";
import { buildCalculatorSchemaGraph } from "@/lib/calculatorSchema";

export default function CalculatorSchemas({ slug, name, description, extraSchemas = [] }) {
  const schemas = buildCalculatorSchemaGraph({ slug, name, description, extraSchemas });
  return <SchemaMarkup data={schemas} />;
}
