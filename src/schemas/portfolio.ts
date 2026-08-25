import { defineType, defineField } from "sanity";

export default defineType({
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                name: 'en',
                title: 'English Description',
                type: 'text',
                rows: 4,
                },
                {
                name: 'id',
                title: 'Indonesian Description',
                type: 'text',
                rows: 4,
                },
            ],
        }),
        defineField({
            name: 'urlGithub',
            title: 'URL Github',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
        defineField({
            name: 'urlDemo',
            title: 'URL Demo',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{
                    type: 'reference', 
                    to: [{ type: 'category' }] 
                }],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                        }
                    ]
                }
            ]
        })
    ]
})