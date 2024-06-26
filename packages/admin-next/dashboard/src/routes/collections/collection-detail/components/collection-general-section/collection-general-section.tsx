import { PencilSquare, Trash } from "@medusajs/icons"
import type { ProductCollection } from "@medusajs/medusa"
import { Container, Heading, Text, usePrompt } from "@medusajs/ui"
import { useAdminDeleteCollection } from "medusa-react"
import { useTranslation } from "react-i18next"
import { ActionMenu } from "../../../../../components/common/action-menu"

type CollectionGeneralSectionProps = {
  collection: ProductCollection
}

export const CollectionGeneralSection = ({
  collection,
}: CollectionGeneralSectionProps) => {
  const { t } = useTranslation()
  const prompt = usePrompt()

  const { mutateAsync } = useAdminDeleteCollection(collection.id)

  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.deleteWarning", {
        count: 1,
      }),
    })

    if (!res) {
      return
    }

    await mutateAsync()
  }

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading>{collection.title}</Heading>
        <ActionMenu
          groups={[
            {
              actions: [
                {
                  icon: <PencilSquare />,
                  label: t("actions.edit"),
                  to: `/collections/${collection.id}/edit`,
                },
              ],
            },
            {
              actions: [
                {
                  icon: <Trash />,
                  label: t("actions.delete"),
                  onClick: handleDelete,
                },
              ],
            },
          ]}
        />
      </div>
      <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
        <Text size="small" leading="compact" weight="plus">
          {t("fields.handle")}
        </Text>
        <Text size="small">/{collection.handle}</Text>
      </div>
    </Container>
  )
}
